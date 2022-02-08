import java.sql.Connection;
/* Aqui es donde esta el producto concreto */
public class MySQLAdapter implements DBAdapter{
    @Override
    public Connection getConnection(){
        Connection connection = null;
        return connection;
    }
}