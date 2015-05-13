import mod = require('../Module');
import constants = require("../../../App/Constants");
import dep = require("../../../App/INamedDependency");

export interface I${SERVICE_NAME}Service {
    Contracts: I${SERVICE_NAME}Contracts;
}

export interface I${SERVICE_NAME}Contracts {
    
}


class ${SERVICE_NAME}Service implements I${SERVICE_NAME}Service {
    public Contracts: I${SERVICE_NAME}Contracts;

    constructor() {
        this.Contracts = {
            
        }
    }
}
export var ${DS}${SERVICE_NAME}Service: dep.INamedService<I${SERVICE_NAME}Service> =
    mod.${MODULE_NAME}Module.RegisterService(
        "${SERVICE_NAME}",
        ${SERVICE_NAME}Service
    );