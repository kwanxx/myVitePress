# wsl2重置.bashrc

.bashrc是Linux环境变量文件，修改不当会导致启动错误等问题，怎么重设呢？

可以将**/etc/skel/.bashrc**，替换当前出错的文件。

```shell
sudo mv ~/.bashrc ~/.bashrc_backup
sudo cp /etc/skel/.bashrc ~/.bashrc
```

一般在修改.bashrc 环境变量文件之前，最好做备份。



参考链接：

1. https://askubuntu.com/questions/1428140/resetting-bashrc-on-wsl-without-using-the-terminal