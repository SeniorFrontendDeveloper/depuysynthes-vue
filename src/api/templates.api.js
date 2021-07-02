import { get, post} from "./httpClient.js"

const path = '/templates'; 


const getAllTemplates = () => get(path)
const getTemplate = (template_id) => get(path, {'template_id':template_id});
const createTemplate = (template) => post(path,  template);


export {
  getAllTemplates,
  getTemplate,
  createTemplate
    
}

