// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
	constructor() {
		this.storage = {};
		this.id = 0;
	}

	addUser({ firstName, lastName, email, age, bio }) {
		const id = this.id;
		this.storage[id] = { id, firstName, lastName, email, age, bio };
		this.id++;
	}

	getUsers() {
		return Object.values(this.storage);
	}

	getUser(id) {
		return this.storage[id];
	}

	updateUser(id, { firstName, lastName, email, age, bio }) {
		this.storage[id] = { id, firstName, lastName, email, age, bio };
	}

	deleteUser(id) {
		delete this.storage[id];
	}

	searchUser({ fName, email }) {
		const matchedUsers = [];
		for (const user of Object.values(this.storage)) {
			if (fName && email && fName === user.firstName && email === user.email) {
				matchedUsers.push(user);
			} else if (fName && !email && fName === user.firstName) {
				matchedUsers.push(user);
			} else if (!fName && email && email === user.email) {
				matchedUsers.push(user);
			}
		}
		return matchedUsers;
	}
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
