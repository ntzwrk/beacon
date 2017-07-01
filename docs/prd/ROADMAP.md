
# Roadmap

The goal is to build a [MVP](https://github.com/ntzwrk/beacon/tree/develop/docs/prd#minimal-viable-product-mvp) before
July 20th, seven days before Blockstack Summit will take place (20 days from now).


### Phase 1: Data specification & architecture (2 days)
* Work out how data should be structured
* Need structures for
	* Poll zone file
	* Poll user-stored information
	* Vote zone file
* Work out how data should get stored
	* Need: Poll and vote

### Phase 2: Implement logic (4 days)
* Implement all necessary methods of the library to issue polls and votes
* Need to
	* Build a poll
	* Publish a poll
	* Verify a poll (signature and data structure)
	* Evaluate a poll (count votes and return statistics)
	* Build a vote
	* Publish a vote
	* Verify a vote

### Phase 3: Small landing page (1 day)
* Model for
	* "View an existing poll" (enter a link)
	* "Create a new poll" (redirects to creation form)

### Phase 4: Poll creation form (2 days)
* Model and implement the poll creation form
* Wire it together with the library

### Phase 5: Voting on polls (2 days)
* Model and implement votes on polls
* Wire it together with the library

### Phase 6: Poll evaluation (2 days)
* Model how evaluations should look like
* Retrieve data from the library and display it accordingly

---
## Bonus

### Phase 7: Search for polls (2 days)
* Implement search for polls
	* Probably could use https://core.blockstack.org/v1/search?query=wenger
* Build a model to represent search results

### Phase 8: List all polls (1 day)
* Heavily linked to the search above, if search works this should work too
* Needs a model for listing polls
