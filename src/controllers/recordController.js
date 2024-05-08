const recordService = require('../services/recordServices');

const getRecordForWorkout = (req, res) => {
    const { params: { workoutId } } = req;
    if (!workoutId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter ':workoutId' can not be empty" },
            });
    }
    try {
        const workout = recordService.getRecordForWorkout(workoutId);
        res.send({ status: "OK", data: workout });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "Failed", data: { error: error?.mesagge || error } });
    }
};

module.exports = {
    getRecordForWorkout,
};