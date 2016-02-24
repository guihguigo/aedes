package br.com.aedes.utils;

import java.util.regex.Matcher;

import org.springframework.util.Assert;

public class SQLLikeUtils {

  public static String like(String value) {
    Assert.hasText(value, "Value can't be null");
    return endsWith(startWith(escapeUnderscore(value)));
  }

  private static String escapeUnderscore(String value) {
    return value.replaceAll("_", Matcher.quoteReplacement("\\_"));
  }

  public static String startWith(String value) {
    return value + "%";
  }

  public static String endsWith(String value) {
    Assert.hasText(value, "Value can't be null");
    return "%" + value;
  }
}
