'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
  projectId: 'crshcr7u',
  dataset: 'production',
  title: 'Pines and Palms',
  apiVersion: '2024-10-22',
  basePath: '/admin',
  plugin: [structureTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
