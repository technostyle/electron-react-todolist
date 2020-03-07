#!/bin/bash
yarn --cwd ./frontend run build;
yarn --cwd ./backend run build;
yarn run start
