# Architecture

## Storage

### Polls

#### Requirements
* immutable once published
* highly available (to counter take-downs of a poll)
* same view for every one participating in the network
* probably too much data for a zone file (media files)
* important data must not fade

#### Solution
* store polls as a JSON object in the creator's zone file
* Atlas (which usually holds routing data / zone files) is able to store arbitrarily data
	* zone file format (use a TXT record with respective key)
* Atlas keeps all revisions of a zone file
	* so a creator cannot make a poll unavailable afterwards
* store uncritical data in the creator's public data store
	* it does not matter when the poll image is not available
	* other data stay due to Atlas

##### Needs
* [ ] a way to interact with raw zone files via `blockstack.js`
	* [ ] a way to get all relevant zone files
	* [ ] a way to read zone files
	* [ ] a way to write zone files

### Votes

#### Requirements
* immutable once published
* highly available (to counter take-downs of certain votes)
* same view for every one participating in the network
* object as whole must not fade

#### Solution
* store votes as a JSON object in the voter's zone file
* Atlas (which usually holds routing data / zone files) is able to store arbitrarily data
	* zone file format (use a TXT record with respective key)
* Atlas keeps all revisions of a zone file
	* so users cannot revert votes afterwards

##### Needs
* [same as polls](#needs)

## Format

### Polls
`@todo`

### Votes
`@todo`
