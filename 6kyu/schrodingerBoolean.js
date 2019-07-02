const omnibool = {
  value: 2,
  toString:function(){
    return Boolean(--this.value);
  }
}
