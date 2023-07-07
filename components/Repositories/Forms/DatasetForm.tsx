import React, { useState } from "react";

interface DataSetFormProps {
    // pass
}

const DataSetForm: React.FC<DataSetFormProps> = () => {
    const [datasetName, setDatasetName] = useState('');
    const handleDatasetSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    // pass
}