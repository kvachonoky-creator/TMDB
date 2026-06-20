# Architecture

This directory contains PlantUML sources that document the TMDB Movie Explorer architecture.

## C4 Model

The core diagrams follow the C4 zoom levels:

1. [System Context](diagrams/01-system-context.puml) shows the viewer, TMDB Movie Explorer, and the external TMDB system.
2. [Container](diagrams/02-container.puml) shows the React web application and browser storage.
3. [Component](diagrams/03-component.puml) decomposes the web application into its major logical components.
4. [Code](diagrams/04-code.puml) details the implementation of the TMDB Integration component.

## Runtime Scenarios

Both runtime diagrams describe loading movie details so that their different perspectives can be compared directly:

- [C4 Dynamic](diagrams/dynamic-load-movie-details.puml) presents numbered interactions between architectural elements.
- [UML Sequence](diagrams/sequence-load-movie-details.puml) presents messages over time, including success and error branches.

## Rendering

Open the `.puml` files with a PlantUML-compatible IDE plugin or render them with PlantUML CLI.
