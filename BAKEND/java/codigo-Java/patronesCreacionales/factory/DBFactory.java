public class DBFactory {
    /* Aqui va el creador y el creador concreto */

    public enum DBType {MySQL, Oracle}

    public static DBAdapter getDBAdapter(DBType dbType){
        switch (dbType) {
            case MySQL:
                return new MySQLAdapter();
                break;
        
            case Oracle:
                return new MyOracleAdapter();
                break;

            default:
                throw new IllegalArgumentException("Dont Supported");
        }
    }
}