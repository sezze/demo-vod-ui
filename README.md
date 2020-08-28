# **_Work-in-progress_** Video on demand UI

A demo user interface created with [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/) and [The Movie Database API](https://developers.themoviedb.org/3).

Available at [vod-ui.demos.aarnio.dev](https://vod-ui.demos.aarnio.dev).

[![Actions Status](https://github.com/sezze/demo-vod-ui/workflows/CI/CD/badge.svg)](https://github.com/sezze/demo-vod-ui/actions)

## About

The project aims to be a completely production-ready grade UI for a video-on-demand service, with first-class mobile and desktop support.

The project uses automated testing and linting in a CI/CD environment using [GitHub Actions](https://github.com/features/actions).

## Security

The API key for TMDb is not accessible in this repository however it is still accessible on the built site.

While this is not ideal I'll run over the reasons as to why I've done it this way.

1. One of the requirements for this project was for it to be client-side only.
2. TMDb does not impose limits on the use of its API. It has done so previously however even then it was IP-bound, not per API key.
3. Gaining access to the API key does not grant anyone any malicious ability.
4. With a server side proxy for the API someone could still send requests to my proxy which is effectivly the same as having access to the API key (other than limitations I might but in place).
5. Other projects with exposed TMDb keys already exist if someone wanted to gain access to one (which can easily be done without limits on TMDb officially).
