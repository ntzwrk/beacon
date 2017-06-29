# Product Requirements Document (PRD)

## Abstract

[Beacon](https://github.com/ntzwrk/beacon) is a decentralized and transparent voting app built on Blockstack's software
stack.

### Target group
It's meant for a wide range of end users, basically everyone that likes to hold a poll and cares about security and
transparancy. Users should not need to understand everything of the underlying technology, but if it matters they should
be able to comprehend why and how votes are trustworthy.

### Problem to solve
Current voting has some flaws:
* Votes are intransparently counted
* Results are published by _one_ entity (signle point of failure regarding manipulation)
* People that properly qualify for voting are not able to vote
* Terms of a poll are not clearly defined before it starts

### Goal
The goal of this software is to enable users to easily issue polls and let other users vote on them. Votes should be
verifiable trustworthy secured by ancoring on a blockchain. Every user should be able to count votes oneself. Besides
that, this software should solve the problems mentioned above.

### Minimal Viable Product (MVP)
* [ ] Users are able to issue polls that have
	* [ ] a title
	* [ ] a description
	* [ ] metadata (such such as a picture)
	* [ ] a defined goal (maximum of votes, end date)
	* [ ] a set of properties a voter must satisfy
	* [ ] a (optionally delayed) start date
* [ ] Users are able to vote on other user's polls
* [ ] Users are able to evaluate finished polls

### Future features
* [ ] Users are able to search for certain polls
* [ ] Users are able to vote secretly
* [ ] Users are able to vote pseudonymously


## Core components / Models
* [ ] Create a poll
* [ ] View a poll
	* [ ] If poll is still running: Submit a vote
	* [ ] If poll is finished: View the evaluation
	* [ ] If poll is finished: Inspect a vote


## User flow

### Create a poll
* Alice fills out a form for creating a new poll
* A click on "Submit poll" takes Alice to her wallet (in Blockstack Portal) and asks for the according transaction to
make
* The JSON object containing the respective data gets written immutable into Alice's data store
* Alice retrieves a link to share with other people

### View a poll
* Bob opens the link and sees all data belonging to that poll

#### Submit a vote
* If the poll is still open, Bob is able to submit a new vote
	* Bob sees all possible decisions at the bottom
	* Bob can select the respective decisions and click on "Submit vote"
	* This takes him to his wallet (in Blockstack Portal) and asks for the according transaction to make
	* The JSON object containing the respective data gets written to Atlas

#### View the evaluation
* If the poll is closed, Bob sees the result and an evaluation of that poll at the bottom

#### Inspect a vote
* If the poll is closed, Bob sees a list with votes at the bottom
	* Bob can click on a specific vote to inspect it
	* This opens a popup with detailed information about that vote


## Elements on each model

### Create a poll
* `@todo`

### View a poll
* `@todo`

#### Submite a vote
* `@todo`

#### View the evaluation
* `@todo`

#### Inspect a vote
* `@todo`
