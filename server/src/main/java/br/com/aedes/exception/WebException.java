package br.com.aedes.exception;

import org.springframework.http.HttpStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class WebException extends RuntimeException implements CodeException {

  private static final long serialVersionUID = 3406636182783807331L;

  private final HttpStatus status;
  private final String message;
  private final String code;

  public WebException(HttpStatus status, String message, String code) {
    super(status.value() + " : " + message);
    this.status = status;
    this.message = message;
    this.code = code;
  }
}
