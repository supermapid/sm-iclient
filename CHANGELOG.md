# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog],
and this project adheres to [Semantic Versioning].

## [Unreleased]

## [0.7.0] - 2023-09-03

### Added

- MTSP path service

### Changed
- refactor base parameter

### Fixed
- path alias broke import


## [0.6.6a] - 2023-08-18

### Fixed
- wrong attribute filter

## [0.6.5a] - 2023-08-15
### Added
- add hasGeometry option
- add transformer for no geometry

## [0.6.4a] - 2023-08-15
### Fixed
- missing spatial query mode

## [0.6.1a] - 2023-06-04

### Fixed
- wrong attributefilter condition on spatial, buffer and bounds

## [0.6.0a] - 2023-06-04

### Added

- Get Features By Geometry
- Get Features By Bounds

### Changed
- refactor directory structure

### Fixed

- typing of geometry transformer from supermap to geojson


## [0.4.0a] - 2022-11-25

### Added

- Added max features
- Data service get by buffer

## [0.3.0a] - 2022-10-09

### Added

- Map service query by SQL

### Changed
- Use conditional exports instead single exports
- Sse GeoJSON prefix in geojson geometry
- Separate geometry type

### Deprecated

### Removed
- Remove dist folder from repo

### Fixed
- Wrong type in fromIndex and toIndex BaseParameter

### Security

## [0.1.0] - 2022-09-06

- initial release

<!-- Links -->
[keep a changelog]: https://keepachangelog.com/en/1.0.0/
[semantic versioning]: https://semver.org/spec/v2.0.0.html

<!-- Versions -->
[unreleased]: https://github.com/sahitono/type-iclient/compare/v0.3.0a...HEAD
[0.3.0a]: https://github.com/sahitono/type-iclient/compare/v0.1.0...v0.3.0a
[0.1.0]: https://github.com/sahitono/type-iclient/releases/tag/v0.1.0
