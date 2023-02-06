
import del from "del"

export const reset = async(done) => {
	await del(app.path.clean);
  done();
  };
  export default del;
