## Q2 - What are the most important aspects of quality software?

### 1. Functional Suitability

The ability for software to meet the requirements of the customer. To put Functional Requirements into the context of the Agile development environment, "User Stories" are used to describe the tasks and objectives that a user will likely wish to perform. The ability for a system to facilitate the user to complete these tasks or objectives determines the it's functional suitability.

Function Suitability can be further broken down into the following characteristics:

#### 1a. Functional completeness

A measure of how well does the software cover all the tasks defined by the Functional Requirements.
A calculator app without the ability to subtract numbers would be a poor quality implementation of a calculator.

#### 1b. Functional correctness

A measure of how accurately does the software complete the tasks defined by the Functional Requirements.
A calculator app that is not able to correctly add two numbers would be a poor quality implementation of a calculator

#### 1c. Functional appropriateness

A measure of how well do the software's functions allow a user to complete specific tasks

### 2. Performance Efficiency

A software's efficiency can be measured over 3 different areas:

#### 2a. Time Behaviour

A measure of how quickly can a system respond to and process requests from a user.
For some systems that carry out intensive tasks, such as video editing of 3d rendering, a long processing time although undesirable, is expected however if a calculator application took longer to open and carry out basic arithmetic operations then what a person could do themselves it would be a poor quality piece of software.

#### 2b. Resource Utilisation

The amount and types of resources a system uses while performing the tasks specified by the Functional Requirements.
This could be temporary resources like memory or network utilisation or permanent like data storage requirements for the systems.

#### 2c. Capacity

The capacity is the maximum limit of a system. It is dictated by its Time Behaviours and Resource Utilisation.
Less time to complete a task, means more tasks can be completed in the same time-frame and less resources used to complete a task means more tasks can be run concurrently.

### 3 Compatibility

A systems Compatibility describes how well a system is can exchange information with other systems as well as how well it it able to perform its required tasks while co-existing in the same hardware of software environments as other systems.

#### 3a. Co-existence

A measure of how well can a system share resources with other systems or product that the customer requires or a user is likely to use.
If the customer uses exclusively Apple products then designing a system that runs on windows means the quality of the system as judged by the customer is going to be poor.

#### 3b. Interoperability

Almost any product of a software system is useless unless it can be shared. By having a system that can share data with other systems means a better user experience and quicker workflows. Having data pipelines from one system to another is useful but if the other system belongs to a third party then it might not be possible. Having the ability to share files in a common, open source format can bridge this gap.

### 4. Usability

A measure of how easily can a system be operated by a user in order to complete specified tasks effectively and efficiently.
Ultimately the users experience with a system dictates the perceived quality of the entire system.

#### 4a. Appropriateness recognisability

A measure of how easy is it for a user to recognise that a system is appropriate for their needs.

#### 4b. Learnability

A measure of how hard is it for the intended user to learn to use that system for its intended purposes.
While some software can have a steep learning curve, or have prerequisite learning requirements, if the software intended user is someone who should be capable of learning to use that system and already have that knowledge then it's not a problem in the scope of learnability. However overly complex UI and complicated workflows for the completion of relatively simple tasks can result in a poor user experience and therefore poor perceived quality.

#### 4c. Operability

The easier a system feels to use, the more confident the user will feel using it to complete tasks. Intuitive and familiar UI with easy to understand workflows will help with a positive user experience and ultimately a better perceived quality of the system.

#### 4d. User error protection

Safeguarding the system against incorrect user inputs is important to protecting the user experience, eg. stopping an incorrect input could stop a system from crashing, but its also important in protecting the security of a system in the case of malicious actors attempting to break the software for their own personal gain.

#### 4e. User interface aesthetics

Bullshit baffles brains. A simple and intuitive UI that is visually pleasing and feels quick is going to be a positive experience for a customer and going to be a huge impact on how they rate the quality of a system.
Alternatively a complex UI with clashing colours that is slow to react is not going to be a good user experience and even if the underlying system is solid and functional people will not want to use it.

#### 4f. Accessibility

A measure of how well can a system be used over a range of capabilities.
Capabilities can relate to both the hardware or the user operating it.

### 5. Reliability

A measure of how well is a system able to perform its specified functions for a specified amount of time

#### 5a. Maturity

A measure of how well is a system able to meet needs for reliability under nominal operating conditions

#### 5b. Availability

A measure of how often is a system operational and accessible when required.

#### 5c. Fault tolerance

A measure of how well is a system able to continue operating despite software or hardware failures.

#### 5d. Recoverability

A measure of how well is a system able to recover data in the case of a failure of the system

### 6. Security

A measure of how well is a system able to protect data.
This includes allowing users or other systems to access data but only to the level specified by a certain authorisation level

#### 6a. Confidentiality

A measure of how well is a system able to to prevent data from being accessed without authorisation.

#### 6b. Integrity

A measure of how well is a system able to prevent unauthorised modification to itself or it's data.

#### 6c. Non-repudiation

A measure of how well is a system able to prove that an action or even has taken place in order to prevent the repudiation (denial or rejection) of such an action or event.
For example, a banking system with an ATM that can't prove you withdrew money from an account, means a user could continuously withdraw funds while claiming they were never received. This would be a poor quality system.

#### 6d. Accountability

A measure of how well is a system able to link an action or event to an entity that requested the action or event.
Extending the previous example, an ATM that allowed the withdrawal of funds but didn't link to the account that requested the withdrawal means anyone could use the ATM to withdraw cash without effecting any accounts.

#### 6e. Authenticity

A measure of how well is a system able to to verify the claimed identity of an entity.
Using the banking example again, an ATM system is able to authenticate an account by using a combination of a physical card that must be presented, and a secret pin that memorised by the owner of the account.

### 7. Maintainability

A measure of how easily can the system be efficiently corrected, improved, modified or adapted.

#### 7a. Modularity

A measure of how much a system has been broken down into discrete components where changes to one will have minimal impact on the operation of another component.

#### 7b. Reusability

A measure of how well a system assets are able to be used in another system, or used to build another assets. Highly modular components are usually also easily reused.

#### 7c. Analysability

A measure of how easy it is to:

- determine the impact on a system when making a change to one of its components
- diagnose a system to identify inefficiencies, deficiencies or points of failure

#### 7d. Modifiability

A measure of how easily a system can be modified without degrading the performance of the system.
A modular system that relies on components with fixed inputs and outputs means that the internal workings of a component can be modified without affecting the function of other components.
New outputs can be created for a component and inputs can also be deprecated if no longer needed but still allow for backwards compatibility.

#### 7e. Testability

A measure of how easy it is to test individual components, groups of components or the entire system itself.

### 8. Portability

A measure of how easy it is to move a system or component from one software, hardware or operational environment to another.

#### 8.a Adaptability

A measure of how easy it is to adapt a system to improving software or hardware environments. Also how easy it is to allow a system designed for a specific operational environment to be repurposed for another.

#### 8b. Installability

A measure of how easily can a system be installed or uninstalled in a specific environment.
A system that involves administrative privileges to install is less installable then a system that doesn't, and a system able to operate from a standalone file is more installable then both as removal of the system is as simple as deleting a file.

#### 8c. Replaceability

A measure of how easily a system can replace an existing system that fulfils the same purpose in the same environment.