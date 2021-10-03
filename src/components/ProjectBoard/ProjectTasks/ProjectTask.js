import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ProjectTask extends Component {
    render() {
        const {project_task} = this.props;
        let priorityString = ["HIGH", "HIGH", "MEDIUM", "LOW"];
        let priorityClasses = ["bg-danger", "bg-danger", "bg-warning", "bg-info"];

        return (
            <div className="card mb-1 bg-light">
                <div className={`card-header text-primary text-light ${priorityClasses[project_task.priority]}`}>
                    ID: {project_task.projectSequence} -- Priority: {priorityString[project_task.priority]}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{project_task.summary}</h5>
                    <p className="card-text text-truncate ">
                        {project_task.acceptanceCriteria}
                    </p>
                    <Link to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`} className="btn btn-primary">
                        View / Update
                    </Link>

                    <button className="btn btn-danger ml-4">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default ProjectTask;