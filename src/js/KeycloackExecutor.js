/* global XMLHttpRequest */
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {Executor, ExecutorRequesterInterface} from '@flexio-oss/xmlhttp-requester'

/**
 * @implements {ExecutorRequesterInterface}
 */
export class KeycloackExecutor extends Executor {
  /**
   *
   * @param {Keycloack} keycloack
   * @param {number} minValidity
   * @param {function} redirectClb
   */
  constructor(keycloack, minValidity, redirectClb) {
    super()
    this.__keycloack = keycloack
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
      .header('Authorization', `Bearer ${this.__keycloack}`)
      .build()
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   */
  get(xmlhttpRequestDelegate, callback) {

    this.__keycloack
      .updateToken(this.__minValidity)
      .success(
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
      .error(() => {
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

    this.__keycloack
      .updateToken(this.__minValidity)
      .success(
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
      .error(() => {
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

    this.__keycloack
      .updateToken(this.__minValidity)
      .success(
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
      .error(() => {
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

    this.__keycloack
      .updateToken(this.__minValidity)
      .success(
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
      .error(() => {
        this.__redirectClb()
      })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   */
  delete(xmlhttpRequestDelegate, callback) {
    this.__keycloack
      .updateToken(this.__minValidity)
      .success(
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
      .error(() => {
        this.__redirectClb()
      })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   */
  head(xmlhttpRequestDelegate, callback) {

    this.__keycloack
      .updateToken(this.__minValidity)
      .success(
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
      .error(() => {
        this.__redirectClb()
      })
  }

}
