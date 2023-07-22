# SnapJots - React Native App

# Application Name: SnapJots 

"SnapJots" is a portmanteau of two words: "Snap" and "Jots."

Snap: In this context, "Snap" suggests capturing or taking a quick picture or snapshot. It relates to the idea of taking a quick note or capturing a moment, similar to how you would take a quick photo with your phone. 

Jots: "Jots" refers to short, brief, or hastily written notes. It implies jotting down quick thoughts, ideas, or reminders. 

SnapJots is a mobile application built with React Native that allows users to manage and store their notes. This README file provides instructions on how to clone, install, and run the app, as well as information about app functionality and system requirements.


## Table of Contents
1. [Getting Started](#getting-started)
    - [Clone the Project](#1-clone-the-project)
    - [Install Dependencies](#2-install-dependencies)
    - [Running on iOS](#3-running-on-ios)
    - [Running on Android](#4-running-on-android)
2. [System Requirements](#system-requirements)
3. [App Functionality](#app-functionality)

## Getting Started

To get started with SnapJots, follow these steps:

### 1. Clone the Project

Use the following command to clone the project from the GitHub repository:

git clone https://github.com/pavankhatri/snapjots.git 

### 2. Install Dependencies

After cloning the project, navigate to the project's root directory and install the required dependencies using the following command:

yarn install

### 3. Running on iOS

If you want to run the app on iOS, follow these additional steps:

Navigate to the iOS directory using the following command:

cd ios 

Install the required pods for iOS by running:

arch -x86_64 pod install

Once the pods are installed, go back to the project root directory and run the app:

yarn run ios

### 4. Running on Android

If you want to run the app on Android, use the following command:

yarn run android

If you face issue try to clean gradle using below command and after hit the above command:

cd android && ./gradlew clean && cd ..

## System Requirements

Please ensure that your development environment meets the following requirements: ( if you face any error )

Node.js version: v19.4.0
Java version: 20.0.1 (as of 2023-04-18)
npm version: 9.2.0
Yarn version: 1.22.19

## App Functionality

SnapJots provides the following features:

Welcome Page: 
Upon opening the app, users will see a welcome page with the app name "SnapJots."

Notes Gallery: 
After clicking the "Start" button on the welcome page, users will be taken to the Notes Gallery page.

Create Notes: 
If the user doesn't have any notes initially, they can click on the "Create Notes" button, which will take them to the Notes Manager page.

Notes Manager: 
In the Notes Manager page, users will find a text field where they can enter the title and description of their notes.

Submitting Notes: 
After filling in the required information, users can click the "Submit" button. If any field is left empty, an error message will be displayed, prompting the user to fill in all the required fields.

Success Popup: 
Upon successful submission, a popup will appear, confirming that the notes have been added. Clicking the "OK" button in the popup will take the user back to the Notes Gallery page, where they will see their newly added notes.

Edit and Delete: 
Users have the ability to edit and delete their notes using the respective buttons.

Search Feature: 
SnapJots includes a search bar that allows users to search for specific notes.

Offline Support: 
Notes are saved locally on the user's device, so an internet connection is not required to access them.

### Thank You !!!





















