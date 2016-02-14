package br.com.aedes.utils;

import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public final class DateUtil {

  private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy");

  /**
   * @deprecated not use
   */
  private DateUtil() {
    // not used
  }

  public static Date toDate(LocalDate localDate) {
    return Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
  }

  public static Date toDate(LocalDateTime localDateTime) {
    return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
  }

  public static String format(LocalDate localDate) {
    return localDate.format(DATE_FORMATTER);
  }

  public static String formatDateTime(Date date) {
    return new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(date);
  }

  public static String formatDate(Date date) {
    return new SimpleDateFormat("dd/MM/yyyy").format(date);
  }

  public static LocalDate toLocalDate(Date date) {
    return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
  }

  public static LocalDateTime toLocalDateTime(Date date) {
    return LocalDateTime.ofInstant(date.toInstant(), ZoneId.systemDefault());
  }

  /**
   * Extract the duration between two Instant in minutes
   * 
   * @param init
   * @param end
   * @return minutes
   */
  public static Long durationBetween(LocalDateTime init, LocalDateTime end) {
    return Duration.between(init, end).toMinutes();
  }
}