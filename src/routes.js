import Home from './components/Home';
import News from './components/News';
import Detail from './components/Detail';
import Add from './components/Add';
import Product from './components/Product';
import ProductAll from './components/product/ProductAll';
import ProductAir from './components/product/ProductAir';
import ProductHealth from './components/product/ProductHealth';
import ProductUnhealth from './components/product/ProductUnhealth';
import ProductDetail from './components/product/ProductDetail';
import ProductDevice from './components/product/ProductDevice';
import ProductPlanting from './components/product/ProductPlanting';
import User from './components/User';
import UserPublish from './components/user/UserPublish';
import UserMessage from './components/user/UserMessage';
import UserLike from './components/user/UserLike';
import UserNotice from './components/user/UserNotice';
import UserComment from './components/user/UserComment';
import UserAttention from './components/user/UserAttention';
import UserShare from './components/user/UserShare';
import FeedBack from './components/user/FeedBack';


export const routes = [
    {path:'/', name:'homeLink',component:Home,meta:{navShow:true}},
    {path:'/news', name:'newsLink',component:News,meta:{navShow:true}},
    {path:'/detail',name:'detailLink',component:Detail,meta:{navShow:false}},
    {path:'/add', name:'addLink',component:Add,meta:{navShow:true}},
    {path:'/product', name:'productLink',component:Product,meta:{navShow:true,tabShow:true},children:[
        {path:'/productall',name:'productallLink',component:ProductAll,meta:{navShow:true,tabShow:true}},
        {path:'/productair',name:'productairLink',component:ProductAir,meta:{navShow:true,tabShow:true}},
        {path:'/producthealth',name:'producthealthLink',component:ProductHealth,meta:{navShow:true,tabShow:true}},
        {path:'/productunhealth',name:'productunhealthLink',component:ProductUnhealth,meta:{navShow:true,tabShow:true}},
        {path:'/productdetail',name:'productdetailLink',component:ProductDetail,meta:{navShow:false,tabShow:false}},
        {path:'/productdevice',name:'productdeviceLink',component:ProductDevice,meta:{navShow:false,tabShow:false}},
        {path:'/productplanting',name:'productplantingLink',component:ProductPlanting,meta:{navShow:false,tabShow:false}},
    ]},
    {path:'/user',name:'userLink',component:User,meta:{navShow:true,usermenuShow:true},children:[
        {path:'/userpublish',name:'userpublishLink',component:UserPublish,meta:{navShow:false,usermenuShow:false}},
        {path:'/usermessage',name:'usermessageLink',component:UserMessage,meta:{navShow:false,usermenuShow:false}},
        {path:'/userlike',name:'userlikeLink',component:UserLike,meta:{navShow:false,usermenuShow:false}},
        {path:'/usernotice',name:'usernoticeLink',component:UserNotice,meta:{navShow:false,usermenuShow:false}},
        {path:'/usercomment',name:'usercommentLink',component:UserComment,meta:{navShow:false,usermenuShow:false}},
        {path:'/userattention',name:'userattentionLink',component:UserAttention,meta:{navShow:false,usermenuShow:false}},
        {path:'/usershare',name:'usershareLink',component:UserShare,meta:{navShow:false,usermenuShow:false}},
        {path:'/feedback',name:'feedbackLink',component:FeedBack,meta:{navShow:false,usermenuShow:false}},
    ]},
    {path:'*',redirect:'/',meta:{}}
]