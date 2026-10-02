import {createProgramme} from '../src/qloo.mjs';

export default async function handler(req,res){
  if(req.method!=='GET') return res.status(405).json({error:'Método no permitido.'});
  if(!process.env.QLOO_API_KEY) return res.status(503).json({error:'La demo todavía no tiene una clave de hackathon configurada.'});
  try{
    const seeds=String(req.query?.seeds||'').split(',');
    const result=await createProgramme({seeds,category:req.query?.category},{apiKey:process.env.QLOO_API_KEY});
    res.setHeader('Cache-Control','no-store');
    return res.status(200).json(result);
  }catch(error){
    const status=/Añade entre|referentes utilizables/.test(error.message)?400:502;
    return res.status(status).json({error:status===400?error.message:'Qloo no pudo completar la recomendación ahora mismo.'});
  }
}
