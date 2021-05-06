const changeDate = () => {
    const date = new Date();

    new Date(date.setDate(date.getDate() + 1));
    new Date(date.setHours(0, 0, 0));

    return (new Date(date.setDate(date.getDate())));
};

export default changeDate;