import { Router, AutoRouter, IttyRouter, IRequest } from 'itty-router'

const router = AutoRouter()

router.get('/test',(request : IRequest) => {
    return {'result':'OK'};
});

router.all('*',  (request:IRequest, env:any) => {
    console.log(`assets handler ${request.url} ${request.path}`)
    return env.ASSETS.fetch(request.url)
});

export default {...router} ; 