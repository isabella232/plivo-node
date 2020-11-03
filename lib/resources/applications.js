import {extend, validate} from '../utils/common.js';
import {PlivoResource, PlivoResourceInterface} from '../base';

const clientKey = Symbol();
const action = 'Application/';
const idField = 'appId';

/**
 * Represents a Application
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */
export class Application extends PlivoResource {
  constructor(client, data = {}) {
    super(action, Application, idField, client);

    if (idField in data) {
      this.id = data[idField];
    }

    extend(this, data);
  }

/**
 * update application
 * @method
 * @param {object} params - to update application
 * @param {string} [params.answerUrl] The URL invoked by Plivo when a call executes this application.
 * @param {string} [params.answerMethod] The method used to call the answer_url. Defaults to POST.
 * @param {string} [params.hangupUrl] The URL that is notified by Plivo when the call hangs up.
 * @param {string} [params.hangupMethod] The method used to call the hangup_url. Defaults to POST
 * @param {string} [params.fallbackAnswerUrl] Invoked by Plivo only if answer_url is unavailable or the XML response is invalid. Should contain a XML response.
 * @param {string} [params.fallbackMethod] The method used to call the fallback_answer_url. Defaults to POST.
 * @param {string} [params.messageUrl] The URL that is notified by Plivo when an inbound message is received. Defaults not set.
 * @param {string} [params.messageMethod] The method used to call the message_url. Defaults to POST.
 * @param {boolean} [params.defaultNumberApp] If set to true, associates all newly created Plivo numbers that have not specified an app_id, to this application.
 * @param {boolean} [params.defaultEndpointApp] If set to true, associates all newly created Plivo endpoints that have not specified an app_id, to this application.
 * @param {string} [params.subaccount] Id of the subaccount, in case only subaccount applications are needed.
 * @param {boolean} [params.logIncomingMessages] flag to control incoming message logs.

 * @promise {object} return {@link Application} object
 * @fail {Error} return Error
 */
  update(params) {
    params.isVoiceRequest = 'true';
    return super.update(params);
  }

/**
 * delete application
 * @method
 * @param {object} params - params to delete application
 * @param {boolean} [params.cascade] - delete associated endpoints
 * @param {string} [params.newEndpointApplication] - link associated endpoints with app
 * @promise {object} return true on success
 * @fail {Error} return Error
 */
  delete(params = {}) {
    if (typeof params.cascade === 'boolean') {
      params.cascade = params.cascade.toString();
    }
    params.isVoiceRequest = 'true';
    return super.delete(params);
  }

}
/**
 * Represents a Application interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */
export class ApplicationInterface extends PlivoResourceInterface {

  constructor(client, data = {}) {
    super(action, Application, idField, client);
    extend(this, data);

    this[clientKey] = client;
  }

/**
 * get application by given id
 * @method
 * @param {string} id - id of application
 * @promise {object} return {@link Application} object
 * @fail {Error} return Error
 */
  get(id) {
    let params = {}
    params.isVoiceRequest = 'true'
    return super.get(id, params);
  }

  /**
   * list applications
   * @method
   * @param {object} params - params to list applications
   * @param {string} [params.subaccount] - ID of the subaccount if present
   * @param {integer} [params.limit] - To display no of results per page
   * @param {integer} [params.offset] - No of value items by which results should be offset
   */
  list(params= {}) {
    params.isVoiceRequest = 'true';
    return super.list(params);
  }

/**
 * create Application
 * @method
 * @param {string} appName - name of application
 * @param {object} params - params to create application
 * @param {string} [params.answerUrl] - answer url
 * @param {string} [params.appName] The name of your application
 * @param {string} [params.answerUrl] The URL invoked by Plivo when a call executes this application.
 * @param {string} [params.answerMethod] The method used to call the answer_url. Defaults to POST.
 * @param {string} [params.hangupUrl] The URL that is notified by Plivo when the call hangs up.
 * @param {string} [params.hangupMethod] The method used to call the hangup_url. Defaults to POST
 * @param {string} [params.fallbackAnswerUrl] Invoked by Plivo only if answer_url is unavailable or the XML response is invalid. Should contain a XML response.
 * @param {string} [params.fallbackMethod] The method used to call the fallback_answer_url. Defaults to POST.
 * @param {string} [params.messageUrl] The URL that is notified by Plivo when an inbound message is received. Defaults not set.
 * @param {string} [params.messageMethod] The method used to call the message_url. Defaults to POST.
 * @param {boolean} [params.defaultNumberApp] If set to true, associates all newly created Plivo numbers that have not specified an app_id, to this application.
 * @param {boolean} [params.defaultEndpointApp] If set to true, associates all newly created Plivo endpoints that have not specified an app_id, to this application.
 * @param {string} [params.subaccount] Id of the subaccount, in case only subaccount applications are needed.
 * @param {boolean} [params.logIncomingMessages] flag to control incoming message logs.
 * @promise {object} return {@link PlivoGenericResponse} object
 * @fail {Error} return Error
 */
  create(appName, params = {}) {

    let errors = validate([
      {field: 'app_name', value: appName, validators: ['isRequired', 'isString']}
    ]);

    if (errors) {
      return errors;
    }

    params.app_name = appName;
    params.isVoiceRequest = 'true';
    return super.create(params);
  }

/**
 * update Application
 * @method
 * @param {string} id - id of application
 * @param {object} params - to update application
 * @param {string} [params.answerUrl] The URL invoked by Plivo when a call executes this application.
 * @param {string} [params.answerMethod] The method used to call the answer_url. Defaults to POST.
 * @param {string} [params.hangupUrl] The URL that is notified by Plivo when the call hangs up.
 * @param {string} [params.hangupMethod] The method used to call the hangup_url. Defaults to POST
 * @param {string} [params.fallbackAnswerUrl] Invoked by Plivo only if answer_url is unavailable or the XML response is invalid. Should contain a XML response.
 * @param {string} [params.fallbackMethod] The method used to call the fallback_answer_url. Defaults to POST.
 * @param {string} [params.messageUrl] The URL that is notified by Plivo when an inbound message is received. Defaults not set.
 * @param {string} [params.messageMethod] The method used to call the message_url. Defaults to POST.
 * @param {boolean} [params.defaultNumberApp] If set to true, associates all newly created Plivo numbers that have not specified an app_id, to this application.
 * @param {boolean} [params.defaultEndpointApp] If set to true, associates all newly created Plivo endpoints that have not specified an app_id, to this application.
 * @param {string} [params.subaccount] Id of the subaccount, in case only subaccount applications are needed.
 * @param {boolean} [params.logIncomingMessages] flag to control incoming message logs.
 * @promise {object} return {@link Application} object
 * @fail {Error} return Error
 */
  update(id, params) {
    let errors = validate([
      {field: 'id', value: id, validators: ['isRequired']}
    ]);

    if (errors) {
      return errors;
    }
    return new Application(this[clientKey], {
      id: id
    }).update(params);
  }

/**
 * delete Application
 * @method
 * @param {string} id - id of application
 * @param {object} params - params to delete application
 * @param {boolean} [params.cascade] - delete associated endpoints
 * @param {string} [params.newEndpointApplication] - link associated endpoints with app
 * @promise {object} return true on success
 * @fail {Error} return Error
 */
  delete(id, params = {}) {
    if (typeof params.cascade === 'boolean') {
      params.cascade = params.cascade.toString();
    }

    return new Application(this[clientKey], {
      id: id
    }).delete(params);
  }
}
