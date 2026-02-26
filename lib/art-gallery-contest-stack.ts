import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class ArtGalleryContestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    // TODO: Add AWS resources (S3, Cognito, etc.)
  }
}
