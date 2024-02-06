#!/bin/bash

export BUCKET=$(terraform output --state="../terraform.tfstate" --raw data_bucket)
export ACCOUNT_ID=$(aws sts get-caller-identity | jq -r .Account)
export GLUE_DB_NAME=taxi_hive_database
export CRAWLER_NAME=taxi-data-crawler
echo "The name of your bucket is: ${BUCKET}"

echo "Now copying the 2022 NY Taxi data into the S3 bucket..."
#
## Copy the 2022 NY Taxi data into the S3 bucket
#aws s3 cp "s3://nyc-tlc/trip data/" s3://$BUCKET/hive/  --exclude "*"  --include  "yellow_tripdata_2022*" --recursive

sleep 2
echo "Now we create the Glue Database..."
# Create Glue Database
aws glue create-database --database-input Name=$GLUE_DB_NAME --no-paginate

sleep 5
echo "Now we will create a crawler..."
# Run a crawler against the S3 bucket
aws glue create-crawler \
--name $CRAWLER_NAME \
--role arn:aws:iam::"$ACCOUNT_ID":role/service-role/AWSGlueServiceRole \
--database-name $GLUE_DB_NAME \
--targets "{\"S3Targets\": [{\"Path\": \"s3://$BUCKET/hive/\"}]}" \
--no-paginate

sleep 5
echo "Now we run the crawler to read the S3 bucket to create a Glue table..."
aws glue start-crawler --name $CRAWLER_NAME --no-paginate

x=0
while [ $(aws glue get-crawler --name $CRAWLER_NAME | jq -r .Crawler.State ) != "READY" ]
do
  seconds=$((x * 10))
  echo "Crawl job in progress...(${seconds}s)"
  sleep 10
  x=$(( x + 1 ))
done
echo "Crawl job finished"

sleep 2
echo "Let's check and make sure our table is now generated."
# Confirm that the database metadata is now collected
export GLUE_TABLE_NAME=$(aws glue get-tables --database-name $GLUE_DB_NAME | jq -r '.TableList[0].Name')
echo "The table name is: $GLUE_TABLE_NAME."