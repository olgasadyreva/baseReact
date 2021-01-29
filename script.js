const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', '',
	'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];

const nameCourse = 'Базовый React';

const command = employers.filter(employer => employer !== '').map(item => {
	item = item.toLowerCase();
	item = item.trim();
	return item = item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();
});

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const { cash, react, add } = data;

const calcCash = (own = 0) => own.reduce((previousValue, currentElem) =>  previousValue + currentElem);

const lesson = calcCash(cash);

const makeBusiness = ({ director, teacher = 'Максим', allModule, gang, course }) => {
	const sumTech = react.concat(add, 'и другие').join(' ');
	console.log(`
Стартуем новый курс: ${course}. Владелец: ${director} , преподаватель: ${teacher}. Всего уроков: ${allModule}. 
Команда Академии: ${gang}.
Первое что изучим будет ${react[0]}. Он очень похож на HTML!.
Технологии которые мы изучим:
${sumTech}`);
};

makeBusiness({ director: 'Артем', allModule: lesson, gang: command, course: nameCourse });