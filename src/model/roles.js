const rolesData = [
    {
        title: 'Pizza Artist',
        company: 'Dominos Pizza',
        startYear: '2010',
        endYear: '2016',
        location: 'New York',
        description: 'Create the best pizza in the known universe.',
    },
    {
        title: 'Male Model',
        company: 'Elektra Global',
        startYear: '2016',
        endYear: 'Ongoing',
        location: 'Worldwide',
        description:
            'Just being really really good looking. Mostly sock commercials',
    },
];

export function createRole({
    title,
    company,
    location,
    startYear,
    endYear,
    description,
}) {
    const id = self.crypto.randomUUID().substring(0, 6);
    return {
        id,
        title,
        company,
        location,
        startYear,
        endYear,
        description,
    };
}

export const initialRoles = rolesData.map((role) => {
    return createRole(role);
});
