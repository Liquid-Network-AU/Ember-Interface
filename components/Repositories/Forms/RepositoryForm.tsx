import React from "react";

const RepositoryForm: React.FC = () => {
    const handleRepositorySubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            <h2>Create a repository</h2>
            <form onSubmit={handleRepositorySubmit}>
                <button type="submit">Create repository</button>
            </form>
        </div>
    )
};

export default RepositoryForm;