import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @output onChange;
  // title = 'modern_angular_crash_course';
	onInput(member: string) {
		this.newMemberName = member;
	}
	errorMessage = '';
  newMemberName = "";
  members: string[] = [];
	numberOfTeams: string | number = "";
	teams: string[][] = [];
	onNumberOfTeamsInput(value: string) {
		this.numberOfTeams = Number(value);
	}
	generateTeams() {
		this.teams = [];
		const allMembers = [...this.members];

		if (this.members.length < this.numberOfTeams) {
			this.errorMessage = 'Not enough members';
			return;
		}

		this.errorMessage = '';

		while (allMembers.length) {
			for (let i = 0; i < this.numberOfTeams; i++) {
				const randomIndex = Math.floor(Math.random() * allMembers.length);
				const member = allMembers.splice(randomIndex, 1)[0];
				if (this.teams[i]) {
					this.teams[i].push(member);
				} else {
					this.teams[i] = [member];
				}
			}
		}

		this.members = [];
		this.numberOfTeams = '';
	}
  addMember() {
		if (!this.newMemberName) {
			this.errorMessage = "Member can't be empty";
			return
		}
		this.errorMessage = "";
    this.members.push(this.newMemberName);
  }

}
