import java.sql.Connection;

/* Esta es la parte del producto */
public interface DBAdapter{
    Connection getConnection();
}