const coursesData = [
    {
        title: 'Certificate B in Pizza',
        school: 'Mario and Son',
        startYear: '2000',
        endYear: '2001',
        location: 'Naples',
    },
    {
        title: 'Chest Rockwell Comportment and Beauty',
        school: 'Handsome Boy Modeling School',
        startYear: '2016',
        endYear: '2016',
        location: 'New York',
    },
];

export function createCourse({ title, school, location, startYear, endYear }) {
    const id = self.crypto.randomUUID().substring(0, 6);
    return {
        id,
        title,
        school,
        location,
        startYear,
        endYear,
    };
}

export const initialCourses = coursesData.map((course) => {
    return createCourse(course);
});
