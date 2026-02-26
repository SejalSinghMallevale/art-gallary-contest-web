#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ArtGalleryContestStack } from '../lib/art-gallery-contest-stack';

const app = new cdk.App();
new ArtGalleryContestStack(app, 'ArtGalleryContestStack');
