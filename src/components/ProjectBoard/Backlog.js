import React, {Component} from 'react';
import ProjectTask from './ProjectTasks/ProjectTask';

class Backlog extends Component {
    render() {
        const {project_task_prop} = this.props;
        const tasks = project_task_prop.map(pt => (
            <ProjectTask key={pt.id} project_task={pt} />
        ));

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>
                        {tasks.filter(x => x.props.project_task.status === "TO_DO")}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        {tasks.filter(x => x.props.project_task.status === "IN_PROGRESS")}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                        {tasks.filter(x => x.props.project_task.status === "DONE")}
                    </div>
                </div>
            </div>
        );
    }
}

export default Backlog;