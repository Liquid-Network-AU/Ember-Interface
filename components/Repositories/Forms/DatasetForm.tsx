import React, { useState } from "react";

interface DataSetFormProps {
    // pass
}

const DataSetForm: React.FC<DataSetFormProps> = () => {
    const [datasetName, setDatasetName] = useState('');
    const handleDatasetSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleDataSetNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setDatasetName(event.target.value);
    };

    return (
        <div>
            <h2>Add a dataset</h2>
            <form onSubmit={handleDatasetSubmit}>
                <label>
                    Dataset Name:
                </label>
            </form>
        </div>
    )
}