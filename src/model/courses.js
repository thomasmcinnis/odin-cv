const coursesData = [
    {
        title: 'Certificate B (Pizza)',
        school: 'Mario and Son Institute',
        startYear: '2000',
        endYear: '2001',
        location: 'Naples',
    },
    {
        title: 'Chest Rockwell Beauty Certificate',
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
