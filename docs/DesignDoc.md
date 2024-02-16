
# PROJECT Design Documentation

## Team Information
* Team name: CAZAM
* Team members
  * Collin Cleary
  * Abdul Ahad Khan
  * Aitan Bachrach
  * Muskan Shah
  * Zaige Shi

## Executive Summary

Nutrition Tracker is a web app where account holders can track their meals, nutrition details, calorie count, water intake, and weight. 


## Requirements

This section describes the features of the application.

### Definition of MVP
  * user registration and authentication
  * profile creation
  * daily food log
  * calorie tracking
  * nutrient breakdown
  * water intake tracker
  * weight tracking
  * progress dashboard
  * food database
  * per-account custom items and meals

### MVP Features
>  _Provide a list of top-level Epics and/or Stories of the MVP._


## Architecture and Design

This section describes the application architecture.

### Software Architecture
Place a architectural diagram here.
![Architecture Diagram](<../media/Architecture Diagram HW 5.png>)

Describe your software architecture.
We will be using a Model-View-Controller architecture for our system. The view will be done using the React framework for HTML/JS/CSS. It will be responsible for displaying the information to the user and capturing their inputs. The inputs will then be used by the controller to either change the page that is being displayed to the user and show them new information or to further process data such as text inputs. Information that needs to be stored will be captured by the controller and sent over HTTPS requests to a Node.JS backend utilizing a REST API. This data will be processed into a form that allows for easy storage and retrieval as nessecary and stored in a MongoDB database. Examples of information that might be stored would be user logins, user logs and goals, and detailed food information. The backend would also handle any sensitive or complex processing such as user authentication or modeling. Due to the design of our system all information requests to display will flow from the view to the controller then to the model then back up since out backend and database will be one in the same.
### Use Cases
> _Place a use case diagram here._
> _Describe your use case diagram._


### Class Diagram
> _Place a class diagram here._
> _Describe your class diagram._
