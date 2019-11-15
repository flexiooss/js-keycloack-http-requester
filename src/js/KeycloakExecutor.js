/* global XMLHttpRequest */
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {Executor} from '@flexio-oss/xmlhttp-requester'

/**
 * @implements {ExecutorRequesterInterface}
 */
export class KeycloakExecutor extends Executor {
  /**
   *
   * @param {Keycloack} keycloak
   * @param {number} minValidity
   * @param {function} redirectClb
   */
  constructor(keycloak, minValidity, redirectClb) {
    super()
    this.__keycloak = keycloak
    this.__minValidity = minValidity
    this.__redirectClb = redirectClb
  }

  /**
   *
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @return {XmlHttpRequestDelegate}
   * @protected
   */
  _setAuthToken(xmlhttpRequestDelegate) {
    return globalFlexioImport.io.flexio.xmlhttp_requester.types.XmlHttpRequestDelegateBuilder
      .from(xmlhttpRequestDelegate)
      .header('Authorization', `Bearer ${this.__keycloak.token}`)
      .build()
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   */
  get(xmlhttpRequestDelegate, callback) {

    this.__keycloak
      .updateToken(this.__minValidity)
      .then(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          callback(
            this.exec(
              this._checkRequestType(
                this._setAuthToken(xmlhttpRequestDelegate)
              ),
              'GET'
            ))

        })
      .catch(() => {
        this.__redirectClb()
      })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @param {?string} [contentType=null]
   * @param {?string} [body=null]
   */
  post(xmlhttpRequestDelegate, callback, contentType = null, body = null) {

    this.__keycloak
      .updateToken(this.__minValidity)
      .then(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          callback(
            this.exec(
              this._checkRequestType(
                this._ensureContentType(
                  this._setAuthToken(xmlhttpRequestDelegate),
                  contentType
                )
              ),
              'POST',
              body
            ))

        })
      .catch(() => {
        this.__redirectClb()
      })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @param {?string} contentType
   * @param {?string} body
   */
  put(xmlhttpRequestDelegate, callback, contentType = null, body = null) {

    this.__keycloak
      .updateToken(this.__minValidity)
      .then(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          callback(
            this.exec(
              this._checkRequestType(
                this._ensureContentType(
                  this._setAuthToken(xmlhttpRequestDelegate),
                  contentType
                )
              ),
              'PUT',
              body
            ))

        })
      .catch(() => {
        this.__redirectClb()
      })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @param {?string} contentType
   * @param {?string} body
   */
  patch(xmlhttpRequestDelegate, callback, contentType = null, body = null) {

    this.__keycloak
      .updateToken(this.__minValidity)
      .then(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          callback(
            this.exec(
              this._checkRequestType(
                this._ensureContentType(
                  this._setAuthToken(xmlhttpRequestDelegate),
                  contentType
                )
              ),
              'PATCH',
              body
            ))

        })
      .catch(() => {
        this.__redirectClb()
      })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   */
  delete(xmlhttpRequestDelegate, callback) {
    this.__keycloak
      .updateToken(this.__minValidity)
      .then(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          callback(
            this.exec(
              this._checkRequestType(
                this._setAuthToken(xmlhttpRequestDelegate)
              ),
              'DELETE'
            ))

        })
      .catch(() => {
        this.__redirectClb()
      })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   */
  head(xmlhttpRequestDelegate, callback) {

    this.__keycloak
      .updateToken(this.__minValidity)
      .then(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          callback(
            this.exec(
              this._checkRequestType(
                this._setAuthToken(xmlhttpRequestDelegate)
              ),
              'HEAD'
            ))

        })
      .catch(() => {
        this.__redirectClb()
      })
  }
}
