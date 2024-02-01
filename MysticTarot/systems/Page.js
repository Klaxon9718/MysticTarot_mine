// pagename: {name: 'pagename'},
//{ key: '', title: '', link: ''},


/**
 * @detail 페이지 정보를 모은 데이터
 */
export const pageNames = {
	Thumbnail: { name: 'Thumbnail' },

	Home: { name: 'Home' },

	Store: { name: 'Store' },
	Setting: { name: 'Setting' },
	SelectSpread: { name: 'SelectSpread' },
	SelectCard: { name: 'SelectCard' },
	Result: { name: 'Result' },
}


/**
 * @detail 모든 페이지 정보를 모은 리스트
 */
export const allPageList = [
	{ key: 'Home', title: '메인 화면', link: 'Home' },

	{ key: 'Thumbnail', title: '썸네일', link: 'Thumbnail' },

	{ key: 'Store', title: '스토어', link: 'Store' },
	{ key: 'Setting', title: '설정', link: 'Setting' },
	{ key: 'SelectSpread', title: '스프레드 선택', link: 'SelectSpread' },
	{ key: 'SelectCard', title: '카드 선택', link: 'SelectCard' },

	{ key: 'Result', title: '결과', link: 'Result' },
];


/**
 * @detail 홈에서 연결되는 페이지 모음
 */
export const homePageList = [
	{ key: 'SelectSpread', title: '스프레드 선택', link: 'SelectSpread' },
	{ key: 'Store', title: '스토어', link: 'Store' },
	{ key: 'Result', title: 'record', link: 'Result' },

	{ key: 'Setting', title: '설정', link: 'Setting' },

];