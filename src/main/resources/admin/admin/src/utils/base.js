const base = {
    get() {
                return {
            url : "http://localhost:8080/springbootc3op5/",
            name: "springbootc3op5",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootc3op5/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "点餐平台网站"
        } 
    }
}
export default base
