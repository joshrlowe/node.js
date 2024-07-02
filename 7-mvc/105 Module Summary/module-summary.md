# Module Summary

## Model

- **Responsible for representing your data**: The model component is tasked with embodying the data of the application.
- **Responsible for managing your data (saving, fetching, …)**: It handles all operations related to data management, including saving and retrieving data.
- **Doesn’t matter if you manage data in memory, files, databases**: The model's responsibilities remain consistent regardless of where the data is stored, whether in memory, files, or databases.
- **Contains data-related logic**: This component houses the logic that pertains directly to the data.

## Controller

- **Connects Model and View**: The controller acts as an intermediary, facilitating communication between the model and the view.
- **Should only make sure that the two can communicate (in both directions)**: Its primary function is to ensure seamless bi-directional communication between the model and the view.

## View

- **What the user sees**: The view is the visual representation of the model’s data, displayed to the user.
- **Shouldn’t contain too much logic (Handlebars!)**: The view should remain simple and primarily focused on presentation, avoiding excessive logic, with a hint towards using templating engines like Handlebars for simplicity.
