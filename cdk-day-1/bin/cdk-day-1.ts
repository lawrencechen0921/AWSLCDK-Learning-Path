#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDay1Stack } from '../lib/cdk-day-1-stack';

const app = new cdk.App();
new CdkDay1Stack(app, 'CdkDay1Stack');
