import query from "../DB/utils.js";

export const findAll = async () => {
    return await query(`SELECT * FROM athletes`);
};

export const findOne = async (athleteId) => {
    return await query(`SELECT * FROM athletes WHERE AthleteID = ?`, [athleteId]);
};

export const addOne = async (athletes) => {
    return await query(`INSERT INTO athletes SET ?`, [athletes]);
};

export const updateOne = async (athleteId, athletes) => {
    return await query('UPDATE athletes SET ? WHERE AthleteID = ?', [athletes, athleteId]);
};

export const removeOne = async (athleteId) => {
    return await query(`DELETE FROM athletes WHERE AthleteID = ?`, [athleteId]);
};