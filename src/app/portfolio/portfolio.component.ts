import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(projectName: string, projectImage:string): void {
    const dialogRef = this.dialog.open(ProjectDetailDialog, {
      width: '90%',
      data: {projectName: projectName, projectImage: projectImage},
    });
  }
  openDialog2(projectName: string, projectImage:string): void {
    const dialogRef = this.dialog.open(ProjectDetailDialog2, {
      width: '90%',
      data: {projectName: projectName, projectImage: projectImage},
    });
  }
  openWebsite(projectName: string, projectImage:string): void {
    const dialogRef = this.dialog.open(ProjectDetailsWebsite, {
      width: '90%',
      data: {projectName: projectName, projectImage: projectImage},
    });
  }

}
export interface ProjectDetailData {
  projectImage: string;
  projectName: string;
}

@Component({
  selector: 'project-details',
  templateUrl: 'project-details.html',
  styleUrls: ['./portfolio.component.scss']
})
export class ProjectDetailDialog {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDetailData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'project-details-2',
  templateUrl: 'project-details-2.html',
  styleUrls: ['./portfolio.component.scss']
})
export class ProjectDetailDialog2 {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDetailData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'project-details-website',
  templateUrl: 'website.html',
  styleUrls: ['./portfolio.component.scss']
})
export class ProjectDetailsWebsite {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDetailData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}