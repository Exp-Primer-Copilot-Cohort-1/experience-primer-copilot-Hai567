function skillsMember() {
    var skills = ['js', 'html', 'css'];
    var member = {
        name: 'egoing',
        age: 20,
        skills: skills
    };
    member.skills[2] = 'jQuery';
    console.log(member.skills);
}