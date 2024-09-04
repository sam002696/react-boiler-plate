class UrlBuilderHelper {
  api(path) {
    return path;
  }

  fileUrl(file) {
    return `http://103.4.145.245/IEIMS/GOVT-TEACHER/${file}`;
  }

  authApi(path) {
    return `http://103.4.145.250:8023/api/v1/${path}`;
  }

  commonApi(path) {
    return `http://103.4.145.250:9000/api/v1/${path}`;
  }

  reviewerLiveApi(path) {
    return `http://103.4.145.250:8035/api/v1/${path}`;
  }

  GovtTeacherApi(path) {
    return `http://103.4.145.250:8023/api/v1/${path}`;
  }
  ForeignApi(path) {
    return `http://103.4.145.250:8030/api/v1/${path}`;
  }
  getRejaApi(path) {
    return `http://103.4.145.250:8033/api/v1/${path}`;
  }
  commonApi(path) {
    return `http://103.4.145.250:9000/api/v1/${path}`;
  }

  eiinApi(path) {
    return `http://103.4.145.250:8005/api/v1/${path}`;
  }

  iwpApi(path) {
    return `http://103.4.145.250:8002/api/v1/${path}`;
  }

  commonTeacherApi(path) {
    return `http://103.4.145.250:8034/api/v1/${path}`;
  }

  dsheMpoServiceApi(path) {
    return `http://103.4.145.250:8024/api/v1/${path}`;
  }

  notificationClientApi(path) {
    return `http://103.4.145.250:8090/api/v1/${path}`;
  }
}

export const UrlBuilder = new UrlBuilderHelper();
